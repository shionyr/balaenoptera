discussionManager = {
    discussions: {},
    __currentSubject: null,
    __doClose: false,           // Flag to close conversation on next __iterate call
    __exitFlag: false,
    __offendedFlag: false,
    __tiredFlag: false,
    __step: -1,
    // @TODO use call function instead of direct invocation
    initDiscussionObject: function () {
        // When the new day begins, I'm no longer tired or offended
        console.error('Not useful');
    },
    startDiscussion: function(subject) {
        discussionManager.__currentSubject = subject;   // The current discussion
        discussionManager.__exitFlag = false;           // Trigger "exit" response of the discussion tree
        discussionManager.__doClose = false;            // Don't close the UI yet
        discussionManager.__step = -1;
        discussionManager.__iterate();
    },
    __iterate: function() {
        var dm = discussionManager;
        if (dm.__doClose) {
            dm.close();
            return;
        }

        var message = '#NULL MESSAGE#';
        var choices = { next: false, unlock: false, offend: false, exit:false};

        // Is this a brand-spanking-new convo?
        if (dm.__step == -1) {
            // Is character offended?
            if (dm.__currentSubject.status.isOffended) {
                message = utils.randomArrayMember(dm.__currentSubject.offended.textBox);
                choices.exit = dm.__currentSubject.offended.choices.exit;
                dm.render (message, choices);
                dm.__doClose = true;    // Set this to true so it immediately closes
                return;
            }
            // Is character tired?
            if (dm.__currentSubject.status.isTired) {
                message = utils.randomArrayMember(dm.__currentSubject.tired.textBox);
                choices.exit = dm.__currentSubject.tired.choices.exit;
                dm.render (message, choices);
                dm.__doClose = true;    // Set this to true so it immediately closes
                return;
            }
            // If day doesn't exist, display default
            if (!dm.__currentSubject.hasOwnProperty(gameManager.sleepManager.currentDay)) {
                message = utils.randomArrayMember(dm.__currentSubject.default.textBox);
                choices.exit = dm.__currentSubject.default.choices.exit;
                dm.render (message, choices);
                dm.__doClose = true;    // Set this to true so it immediately closes
                return;
            }
            // Set pointer to 1, since we're now here!
            dm.__step = 0;
        }


        // Standard operation - get the day
        var day = dm.__currentSubject[gameManager.sleepManager.currentDay];

        // Is offended?  Render convo-specific offended flagging
        if (dm.__currentSubject.status.isOffended) {
            if (dm.__currentSubject.status.isUnlocked) {
                message = day.unlocked.reactions.offend;
            } else {
                message = day.basic.reactions.offend;
            }
            choices.exit = '<exit>';
            dm.__doClose = true;
        }

        // Exit flag set?
        else if (dm.__exitFlag) {
            if (dm.__currentSubject.status.isUnlocked) {
                message = day.unlocked.reactions.exit;
            } else {
                message = day.basic.reactions.exit;
            }
            choices.exit = '<exit>';
            dm.__doClose = true;
        }

        // Do regular day rendering
        else {
            // Check if we're too far ahead
            if (dm.__currentSubject.status.isUnlocked && dm.__step >= day.unlocked.steps.length) {
                // render exit
                message = day.unlocked.reactions.exit;
                choices.exit = '<exit>';
            }
            else if (!dm.__currentSubject.status.isUnlocked && dm.__step >= day.basic.steps.length) {
                // render exit
                message = day.basic.reactions.exit;
                choices.exit = '<exit>';
            }
            else {
                // Get the step
                if (dm.__currentSubject.status.isUnlocked) {
                    message = utils.randomArrayMember(day.unlocked.steps[dm.__step].textBox);
                    choices = day.unlocked.steps[dm.__step].choices;
                } else {
                    message = utils.randomArrayMember(day.basic.steps[dm.__step].textBox);
                    choices = day.basic.steps[dm.__step].choices;
                }
            }
        }

        // Render it
        dm.render (message, choices);
    },

    close: function() {
        discussionManager.__currentSubject = null;
        discussionManager.popup.hide();
    },

    callbacks: {
        next: function(){
            // increase step by 1
            discussionManager.__step++;
            // iterate
            discussionManager.__iterate();
            return;
        },
        unlock: function(){
            // set unlocked
            discussionManager.__currentSubject.status.isUnlocked = true;
            discussionManager.__step = 0;
            // close the discussion
            discussionManager.close();
            return;
        },
        offend: function(){
            // set offended
            discussionManager.__currentSubject.status.isOffended = true;
            // iterate so you can see their offended speech
            discussionManager.__iterate();
            return;
        },
        exit: function(){
            // if it's already advanced, set tired to true (we won't ever access this if tired already...)
            if (discussionManager.__currentSubject.status.isUnlocked) {
                discussionManager.__currentSubject.status.isTired = true;
            }
            else if (!discussionManager.__currentSubject[gameManager.sleepManager.currentDay]['unlocked']) {
                discussionManager.__currentSubject.status.isTired = true;
            }
            // set exit flag so it'll close
            discussionManager.__exitFlag = true;
            // iterate
            discussionManager.__iterate();
            return;
        }
    },

    render: function(message, options) {
        var optionsArr = [], optionsText = [], optionsCBs = [];
        for (var i in options) {
            if (typeof(options[i]) == 'string') {
                optionsArr.push(i);  // Add the option in
            }
        }
        optionsArr = utils.shuffleArray(optionsArr);
        for (var i = 0; i < optionsArr.length; i++) {
            optionsText.push(options[optionsArr[i]]);
            optionsCBs.push(discussionManager.callbacks[optionsArr[i]]);
        }
        discussionManager.popup.hide();
        discussionManager.popup.render(
            message,
            optionsText,
            optionsCBs,
            discussionManager.__currentSubject.identifier,
            (discussionManager.__currentSubject.status.isOffended ? 'offended' : 'neutral'),
            discussionManager.__currentSubject.name
        );
        discussionManager.popup.show();
    },

    // Separate object for UI popup
   popup: {
        __element: null,
        __buttons: [],
        __buttonClickCBs: [],
        __textBoxElement: null,
        __checkInit: function() {
            if (discussionManager.popup.__element === null) {
                discussionManager.popup.__element = $('.gameObject.popupUI');
                discussionManager.popup.__picture = $('.gameObject.portrait');
                discussionManager.popup.__nameElement = $('.gameObject.popupUI .name');
                discussionManager.popup.__textBoxElement = $('.gameObject.popupUI .statement');
                discussionManager.popup.__buttons.push($('.gameObject.responseChoice.clickable.first'));
                discussionManager.popup.__buttons.push($('.gameObject.responseChoice.clickable.second'));
                discussionManager.popup.__buttons.push($('.gameObject.responseChoice.clickable.third'));
                discussionManager.popup.__buttons.push($('.gameObject.responseChoice.clickable.fourth'));

                // Setup CBs
                discussionManager.popup.__buttons[0].click(function(e,f){
                    discussionManager.popup.__clickCB(0);
                });
                discussionManager.popup.__buttons[1].click(function(e,f){
                    discussionManager.popup.__clickCB(1);
                });
                discussionManager.popup.__buttons[2].click(function(e,f){
                    discussionManager.popup.__clickCB(2);
                });
                discussionManager.popup.__buttons[3].click(function(e,f){
                    discussionManager.popup.__clickCB(3);
                });
            }
        },
       __clickCB: function(index) {
           if (!!discussionManager.__buttonClickCBs[index]) {
               gameManager.sounds.beep.play();
               discussionManager.__buttonClickCBs[index]();
           }
       },
       render: function (message, optionsText, callbacks, identifier, emotion, name) {
           discussionManager.popup.__textBoxElement.text (message);
           discussionManager.popup.__nameElement.text (name);
           for (var i = 0; i < 4; i++) {
               if (optionsText[i]) {
                   discussionManager.popup.__buttons[i].text (optionsText[i]);
                   discussionManager.popup.__buttons[i].addClass('visible');
               }
               else {
                   discussionManager.popup.__buttons[i].text ('');
                   discussionManager.popup.__buttons[i].removeClass('visible');
               }
           }
           discussionManager.__buttonClickCBs = callbacks;
           discussionManager.popup.__picture.attr('character',identifier);
           discussionManager.popup.__picture.attr('emotion',emotion);
       },
       show: function() {
            discussionManager.popup.__checkInit();
            discussionManager.popup.__element.removeClass('hidden');
        },
        hide: function() {
            discussionManager.popup.__checkInit();
            discussionManager.popup.__element.addClass('hidden');
        }
    }
};

$(document).ready(function() {
    //FireBase
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAtHFqNyx9r1K80KZ9O-BOPMJyygEfRVtg",
        authDomain: "ckatd-3c3f4.firebaseapp.com",
        databaseURL: "https://ckatd-3c3f4.firebaseio.com",
        projectId: "ckatd-3c3f4",
        storageBucket: "",
        messagingSenderId: "342675726179"
    };
    firebase.initializeApp(config);

    // API
    /**
     * Object that will grab data
     * from open jsonp obj from reddit API
     */
    var redditGetter = {
        /**
         * Returns basic user information 
         * including total link and comment karma
         * Ex; https://www.reddit.com/user/rizse/about.json
         */
        getUserInfo: function(username) {
            var params = {
                user: username,
                url: 'https://www.reddit.com/user/' + username + '/about.json'
            };
            $.ajax({
                    method: 'GET',
                    url: params.url,
                    dataType: 'json'
                })
                .done(function(data) {
                    console.log(data);
                    return data;
                });
        },
        /**
         * Returns list of all user's comments
         * contains upvotes vs downvotes
         * subreddit and comment
         * Ex; https://www.reddit.com/user/rizse/comments.json
         */
        getUserComments: function(username) {
            var params = {
                user: username,
                url: 'https://www.reddit.com/user/' + username + '/comments.json'
            };
            $.ajax({
                    method: 'GET',
                    url: params.url,
                    dataType: 'json'
                })
                .done(function(data) {
                    console.log(data);
                    return data;
                });
        },
        /**
         * Returns list of all user's posts
         * contains upvotes vs downvotes
         * subreddit additional info
         * Ex; https://www.reddit.com/user/rizse/submitted.json
         */
        getUserPosts: function(username) {
            var params = {
                user: username,
                url: 'https://www.reddit.com/user/' + username + '/submitted.json'
            };
            $.ajax({
                    method: 'GET',
                    url: params.url,
                    dataType: 'json'
                })
                .done(function(data) {
                    console.log(data);
                    return data;
                });
        }
    };
    //END API

    //PRESENTATION
    var centeredSearch = $(".center-form");
    var mainCont = $(".main-cont");
    var searchButton = $("#troll-search > button");
    var buttonText = $(".troll-butt-text");

    centeredSearch.hide();

    //Initial centering
    getVertMargin(centeredSearch, mainCont);
    getHorzMargin(buttonText, searchButton);
    centeredSearch.show();

    //END: PRESENTATION

    //CORE
    //get



    console.log(redditGetter.getUserInfo('rizse'));

    //END: CORE





    //PARTICLE.JS & PRESENTATION
    //align an element vertically
    function getVertMargin(smallElem, parentElem) {
        var largeHeight = parseInt($(parentElem).height());
        var smallHeight = parseInt($(smallElem).css("height"));
        var marginAvail = largeHeight - smallHeight;
        console.log(marginAvail);
        var marginToSet = (marginAvail / 2);

        $(smallElem).css("margin-top", marginToSet);
        $(smallElem).css("margin-bottom", marginToSet);

    }

    //align an element horizontally
    function getHorzMargin(smallElem, parentElem) {
        var largeWidth = parseInt($(parentElem).width());
        var smallWidth = parseInt($(smallElem).css("width"));
        var marginAvail = largeWidth - smallWidth;
        console.log(marginAvail);
        var marginToSet = (marginAvail / 2);

        $(smallElem).css("margin-left", marginToSet);
        $(smallElem).css("margin-right", marginToSet);
    }

    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', 'assets/json/particles.json', function() {
        console.log('callback - particles.js config loaded');
    });

    //END: PARTICLE.JS & PRESENTATION
});
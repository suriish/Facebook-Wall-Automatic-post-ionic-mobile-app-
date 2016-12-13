
/* Fb share API call */
$scope.shareFbCheckin = function() {
        try {
            $cordovaFacebook.getLoginStatus()
                .then(function(success) {
                    // save access_token
                    var accessToken = success.authResponse.accessToken;
                    var app_id = "Your App ID";
                    var content = '&message=YOUR_CUSTOm MESSAGE&link=YOUR_TARGET_LINK&caption=POST_VIA_NAME&picture=PICTURE_URL';
                    var url = "https://graph.facebook.com/me/feed?app_id=" + app_id + "&access_token=" + accessToken + content;
                    $http.post(url).then(function(response) {
                    //  success message
                    });
                });
        } catch (_error) {
            //  Error message
        }
    }
    /* Fb share API call */

angular.module('linkControllers',[])

.controller('regCtrl', function($http){
    var app = this;
    this.regUser = function(){
        $http.get('/api/links',this.regData).then(function(data){
            var length = data.data.length;
           for(i=0;i<length;i++){
               if(data.data[i].contentType=="video"){
                   app.title = data.data[i].title;
                   app.author = data.data[i].author;
                   app.contentType = data.data[i].contentType;
                   app.url = data.data[i].url;

                   
               }
           }
        });
    
    }

});


import {SortService} from 'app/services/sort.service';
import {Link} from 'app/models/link';

function get(){
    this.sortService.getAllcontent().subscribe(data =>{
        var j =0;
        for(j=0;j<data.length;j++){
            var link = new Link();
            link.title = data[j].title;
            link.author = data[j].author;
            link.content = data[j].content;
            link.contentType = data[j].contentType;
            link.date = data[j].date;
            link.url = data[j].url;
        }
    });
}

export const Links: Link[] = [];
import Avatar from './avatar';
import Datalist from './datalist';
import Header from './header';
// import listdata from './listdata';

function List() {
    
    return (
        <div className="List">
            <Header />
            <div class="outer" id="outer">
                <div class="box">
                    <Avatar />
                    <Datalist />
                    <button>Select</button>
                </div>
          </div>
        </div>
     );
}

export default List;
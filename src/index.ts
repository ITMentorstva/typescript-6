import {generateYears} from "./helpers/yearGeneratorHelper";
import {renderPreviousSearches} from "./ui/renderPreviousSearches";
import {bindSearchEvents} from "./events/searchEvents";


function init(): void {

    generateYears(1960, 2025);
    renderPreviousSearches();
    bindSearchEvents();

}

init();
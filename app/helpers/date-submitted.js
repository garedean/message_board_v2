// NOTE: I ran into a bug using this helper. It works fine up until refreshing the app, then it leads to a console error and the page not loading. I decided to use the full date object in the template -- not formatted, but it's better than showing the mentioned bug.

import Ember from 'ember';

export function dateSubmitted(response) {
  debugger;
    var date = response[0].get('date');

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    return month + "/" + day + "/" + year;
}

export default Ember.HTMLBars.makeBoundHelper(dateSubmitted);

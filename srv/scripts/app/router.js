Aeacus.Router.map(function(){
    this.resource('aeacus',{path : '/'},function(){

        this.route('dashboard', {path:'/'});

        this.route('calendar');

        this.route('invoices');
        this.route('creditnotes');
        this.route('customers');

    });

    this.route('settings');
});
Aeacus.Router.map(function () {
    this.resource('aeacus', {path: '/'},function(){
        this.route('dashboard');
        this.route('bankaccounts');
        this.route('invoices');
        this.route('creditnotes');
        this.route('customers');
    });

    this.resource('login');

});
Aeacus.Router.map(function () {
    this.resource('aeacus', {path: '/'}, function () {
        this.route('dashboard');


        this.route('bankaccounts');
        this.route('bankaccount.new', {path: '/bankaccount/new'});
        this.resource('aeacus.bankaccount', {path: '/bankaccount/:bankaccount_id'}, function () {
            this.route('edit');
        });


        this.route('invoices');
        this.route('creditnotes');
        this.route('customers');
    });

    this.resource('login');

});
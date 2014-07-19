Aeacus.Router.map(function () {
    this.resource('aeacus', {path: '/'}, function () {

        this.route('dashboard', {path: '/'});

        this.route('calendar');

        this.route('invoices');
        this.route('creditnotes');
        this.route('customers');

    });

    this.resource('settings', {path: '/settings'}, function () {

        this.route('bankaccounts');
        this.route('bankaccount.new', {path: '/bankaccount/new'});
        this.resource('bankaccount', {path: '/bankaccount/:bankaccount_id'}, function () {
            this.route('edit');
        });

    });
});
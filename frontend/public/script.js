$(document).ready(function () {
    var augmentData = []; 

    // Function to calculate and set the search input width
    function setSearchInputWidth() {
        var tableCellWidth = $('#augmentTable td:first-child').width(); 
        var searchInputWidth = tableCellWidth / 2;
        $('#searchInput').width(searchInputWidth);
    }

    // Call the function to set the initial search input width on page load
    setSearchInputWidth();

    // Function to fetch data from the server and populate the table
    function fetchAndPopulateTable() {
        $.ajax({
            url: 'https://db-endpointwithstage-c4d147e3af32.herokuapp.com/', 
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                augmentData = data; 
                populateTable(augmentData);
            },
            error: function () {
                alert('Failed to fetch augment data. Please try again later.');
            }
        });
    }

    // Function to populate the table with data
    function populateTable(data) {
        var tableBody = $('#augmentTable tbody');
        tableBody.empty();

        data.forEach(function (augment) {
            var row = $('<tr>');
            row.append($('<td>').text(augment.augment_name || "-"));
            row.append($('<td>').text(augment.average_placement || "-"));
            row.append($('<td>').text(augment['2-1'] || "-"));
            row.append($('<td>').text(augment['3-2'] || "-"));
            row.append($('<td>').text(augment['4-2'] || "-"));
            row.append($('<td>').text(augment.games_played || "-"));
            tableBody.append(row);
        });
    }

    // Function to sort the table by the specified column and order
    function sortTable(column, order) {
        augmentData.sort(function (a, b) {
            var aValue = a[column];
            var bValue = b[column];
            if (typeof aValue === 'string') {
                aValue = aValue.toLowerCase();
                bValue = bValue.toLowerCase();
            }
            if (order === 'asc') {
                if (aValue < bValue) return -1;
                if (aValue > bValue) return 1;
                return 0;
            } else {
                if (aValue < bValue) return 1;
                if (aValue > bValue) return -1;
                return 0;
            }
        });
        populateTable(augmentData);
        updateSortingIcon(column, order);
    }

    // Function to update the sorting icon in the table header
    function updateSortingIcon(column, order) {
        $('.sort-icon').removeClass('asc desc').find('i').removeClass().addClass('fas fa-sort');
        var sortIcon = $('.sort-icon[data-sort="' + column + '"]');
        if (order === 'asc') {
            sortIcon.addClass('asc').find('i').removeClass().addClass('fas fa-sort-up');
        } else if (order === 'desc') {
            sortIcon.addClass('desc').find('i').removeClass().addClass('fas fa-sort-down');
        }
    }

    // Function to toggle the sorting order when the sorting icon is clicked
    function toggleSortingOrder(column) {
        var currentOrder = $('.sort-icon[data-sort="' + column + '"]').hasClass('asc') ? 'asc' : 'desc';
        var newOrder = currentOrder === 'asc' ? 'desc' : 'asc';
        sortTable(column, newOrder);
    }

    // Attach click event handlers to the sorting arrows
    $('.sort-icon').on('click', function () {
        var column = $(this).data('sort');
        toggleSortingOrder(column);
    });

    // Function to filter the table based on the search term
    function filterTable(searchTerm) {
        var filteredData = augmentData.filter(function (augment) {
            return augment.augment_name.toLowerCase().includes(searchTerm.toLowerCase());
        });
        populateTable(filteredData);
    }

    // Attach keyup event handler to the search input
    $('#searchInput').on('keyup', function () {
        var searchTerm = $(this).val();
        filterTable(searchTerm);
    });

    // Function to show "Refreshed!" text on the button after successful refresh
    function showRefreshedText() {
        var refreshButton = $('#refreshButton');
        refreshButton.removeClass('btn-primary').addClass('btn-success').text('Refreshed!');
        // revert button back to its original state after 1 second
        setTimeout(function () {
            refreshButton.removeClass('btn-success').addClass('btn-primary').text('Refresh Data');
        }, 1000);
    }

    // Function to refresh data and update the table
    function refreshData() {
        $.ajax({
            url: 'https://db-endpointwithstage-c4d147e3af32.herokuapp.com/',
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                augmentData = data; 
                populateTable(augmentData);
                showRefreshedText(); 
            },
            error: function () {
                alert('Failed to fetch augment data. Please try again later.');
            }
        });
    }

    // Attach click event handler to the Refresh Data button
    $('#refreshButton').on('click', function () {
        refreshData();
    });

    // Call the function to fetch and populate the table on page load
    fetchAndPopulateTable();
});

angular.module('hollandDemo').factory('mainFty', function() {

    var viewFooterData = {
        part1: [{
                    description:'ms Koningsdam',
                    links: '#'
                }, {
                    description: '2015 Dancing with the Stars: At Sea',
                    links: '#'
                }],
        part2: ['News', 'Travel', 'Advisory', 'Safety & Security', 'Mission & Values', 'Sustainability', 'Charters and Incentives', 'Awards', 'World\'s Leading Cruise Lines', 'Careers', 'Cruise-A-Nality'],
        part3: ['Find Cruises', 'Destinations', 'Ports & Excursions', 'Flights & Transfers', 'Cancellation Protection Plans', 'E-Brochures', 'Group Cruises', 'Hotel Packages', 'Find a Travel Professional', 'Order a Brochure'],
        part4: ['Contact Us', 'Customer Service'],
        part5: ['Plan Flights & Transfers', 'Book Shore Excursions', 'Reserve Specialty Dining', 'Explore Indulgences & Spa', 'Check In Online', 'Holland America Line Shop'],
        part6: ['Le Cirque', 'Pinnacle Grill', 'Guest Chefs'],
        part7: ['Anniversary Sale', 'Untamed Alaska', 'Mediterranean Savings', 'East Coast Departures', 'Caribbean Dreams', 'Pacific Coastal', 'Panama Canal Cruises', 'Passage to the Far East', 'South America, Amazon, Carnaval', 'ms Prinsendam Sailings', 'Worldwide Adventures', 'Cruise Deals'],
        part8: [{
                    address: "../images/Sss.png",
                    alt: "Sip|Savor|Sail"
                }, {
                    address: "../images/blue_email.png",
                    alt: "email icon",
                    text: "Sign up for Special Offers"
                }, {
                    address: "../images/blue_ship.png",
                    alt: "cruise ship",
                    text: "Enter to win a cruise",
                    span: "ship"
                }, {
                    class: "holland-visa", 
                    address: "../images/10x10.png",
                    alt: "Holland VISA",
                    text: "Holland America Line Reward VISA Card",
                    span: "visa"
                }]
    }

    var factory = {
        getData: function () {
            return viewFooterData;
        }
    }

    return factory;
});
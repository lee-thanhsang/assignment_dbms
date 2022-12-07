// $("#tab-faculty").DataTable({
//     responsive: true,
//     lengthChange: false,
//     autoWidth: false,
//     language: {
//         url: "https://cdn.datatables.net/plug-ins/1.10.25/i18n/Vietnamese.json",
//     },
//     // buttons: [
//     //     {
//     //         text: "Thêm mới",
//     //         action: function (e, dt, node, config) {
//     //             window.location.href = "/faculty/add";
//     //         },
//     //     },
//     // ],
// });

$(".customer-update-button").click(function(e){
    var Lname = $(this).data("lastname");
    var Fname = $(this).data("firstname");
    var SSN = $(this).data("ssn");
    var Gender = $(this).data("gender");
    var Email = $(this).data("email");
    var PhoneNum1 = $(this).data("phonenum");
    var NumberStreet = $(this).data("numberstreet");
    var Wards = $(this).data("wards");
    var District = $(this).data("district");
    var City = $(this).data("city");

    $("#update-customer input[name='LastName']").val(Lname);
    $("#update-customer input[name='FirstName']").val(Fname);
    $("#update-customer input[name='Gender']").val(Gender);
    $("#update-customer input[name='Email']").val(Email);
    $("#update-customer input[name='Phone1']").val(PhoneNum1);
    $("#update-customer input[name='NumberStreet']").val(NumberStreet);
    $("#update-customer input[name='Wards']").val(Wards);
    $("#update-customer input[name='District']").val(District);
    $("#update-customer input[name='City']").val(City);
})

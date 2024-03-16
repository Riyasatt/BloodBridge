const bloodDonationData = [
    {
      id: 101,
      name: "Angel Wings Blood Bank",
      address: "1102 Angel Avenue, Hyderabad, Telangana, India",
      contactNo: "+91 9876543273",
      timing: "Mon-Sat 8-4",
      blood : ["A+","A-","B+","B-","O+","O-"]
    },
    {
      id: 102,
      name: "City Medical Center",
      address: "1103 City Road, Kolkata, West Bengal, India",
      contactNo: "+91 9876543274",
      timing: "Mon-Sun 24/7",
      blood : ["A+","A-","B+","B-","O-"]
    },
    {
      id: 103,
      name: "Sunshine Hospital",
      address: "1104 Sunshine Street, Pune, Maharashtra, India",
      contactNo: "+91 9876543275",
      timing: "Mon-Sat 8-6",
      blood : ["A+","A-","B+","B-","O+","O-"]
    },
    {
      id: 104,
      name: "Unity Blood Bank",
      address: "1105 Unity Road, Bangalore, Karnataka, India",
      contactNo: "+91 9876543276",
      timing: "Mon-Fri 9-5",
      blood : ["A+","A-","B+","B-","O+",]
    },
    {
      id: 105,
      name: "Lifeblood Blood Center",
      address: "1106 Life Road, Delhi, India",
      contactNo: "+91 9876543277",
      timing: "Tue-Thurs 10-4",
      blood : ["A+","B+","B-","O+","O-"]
    },
    {
      id: 106,
      name: "Eternal Hope Hospital",
      address: "1107 Eternal Avenue, Mumbai, Maharashtra, India",
      contactNo: "+91 9876543278",
      timing: "Mon-Sun 24/7",
      blood : ["A+","A-","B+","B-","O+","O-"]
    },
    {
      id: 107,
      name: "Samaritan Blood Bank",
      address: "1108 Samaritan Street, Chennai, Tamil Nadu, India",
      contactNo: "+91 9876543279",
      timing: "Mon-Sat 7-5",
      blood : ["A+","A-","B+","B-","O+","O-"]
    },
    {
      id: 108,
      name: "Golden Heart Hospital",
      address: "1109 Golden Gate Road, Jaipur, Rajasthan, India",
      contactNo: "+91 9876543280",
      timing: "Mon-Fri 8-4",
      blood : ["A+","A-","B+","B-","O+","O-"]
    },
    {
      id: 109,
      name: "Hope for Life Blood Drive",
      address: "1110 Hope Street, Lucknow, Uttar Pradesh, India",
      contactNo: "+91 9876543281",
      timing: "Tue-Sat 9-7",
      blood : ["A+","A-","B+","B-","O+","O-"]
    },
    {
      id: 110,
      name: "Angel's Grace Blood Bank",
      address: "1111 Angel's Grace Avenue, Ahmedabad, Gujarat, India",
      contactNo: "+91 9876543282",
      timing: "Mon-Sun 24/7",
      blood : ["A+","A-","B+","B-","O+","O-"]
    },
    {
      id: 111,
      name: "Sunrise Hospital",
      address: "1112 Sunrise Street, Bhubaneswar, Odisha, India",
      contactNo: "+91 9876543283",
      timing: "Mon-Sat 8-6",
      blood : ["A+","A-","B+","B-","O+","O-"]
    },
    {
      id: 112,
      name: "Starlight Blood Center",
      address: "1113 Starlight Lane, Nagpur, Maharashtra, India",
      contactNo: "+91 9876543284",
      timing: "Mon-Fri 9-5",
      blood : ["A+","A-","B+","B-","O+","O-"]
    },
    {
      id: 113,
      name: "Bright Future Hospital",
      address: "1114 Bright Future Road, Chandigarh, Punjab, India",
      contactNo: "+91 9876543285",
      timing: "Mon-Sun 24/7",
      blood : ["A+","A-","B+","B-","O+","O-"]
    },
    {
      id: 114,
      name: "Lifeline Blood Drive",
      address: "1115 Lifeline Street, Guwahati, Assam, India",
      contactNo: "+91 9876543286",
      timing: "Tue-Thurs 10-4",
      blood : ["A+","A-","B+","B-","AB+","AB-"]
    },
    {
      id: 115,
      name: "Angel's Hope Hospital",
      address: "1116 Angel's Hope Road, Raipur, Chhattisgarh, India",
      contactNo: "+91 9876543287",
      timing: "Mon-Fri 8-4",
      blood : ["A+","A-","B+","B-","O+","O-"]
    },
    {
      id: 116,
      name: "Evergreen Blood Bank",
      address: "1117 Evergreen Avenue, Gandhinagar, Gujarat, India",
      contactNo: "+91 9876543288",
      timing: "Mon-Sun 24/7",
      blood : ["A+","A-","B+","B-","O+","O-"]
    },
    {
      id: 117,
      name: "Divine Care Hospital",
      address: "1118 Divine Care Street, Kohima, Nagaland, India",
      contactNo: "+91 9876543289",
      timing: "Mon-Sat 9-7",
      blood : ["A+","A-","B+","B-","O+","O-"]
    },
    {
      id: 118,
      name: "Sunflower Blood Center",
      address: "1119 Sunflower Road, Imphal, Manipur, India",
      contactNo: "+91 9876543290",
      timing: "Mon-Fri 8-6",
      blood : ["A+","A-","B+","B-","O+","O-"]
    },
    {
      id: 119,
      name: "Golden Dawn Hospital",
      address: "1120 Golden Dawn Avenue, Agartala, Tripura, India",
      contactNo: "+91 9876543291",
      timing: "Mon-Sun 24/7",
      blood : ["A+","A-","B+","B-","O+","O-"]
    },
    {
      id: 120,
      name: "Trinity Blood Drive",
      address: "1121 Trinity Lane, Shillong, Meghalaya, India",
      contactNo: "+91 9876543292",
      timing: "Tue-Thurs 9-5",
      blood : ["A+","A-","B+","B-","O+","O-"]
    },{
      id: 121,
      name: "Trinity Blood Drive",
      address: "1121 Trinity Lane, Rohini, Delhi, India",
      contactNo: "+91 9876543292",
      timing: "Tue-Thurs 9-5",
      blood : ["A+","A-","B+","B-","O+","O-"]
    },
    {
      id: 123,
      name: "Trinity Blood Drive",
      address: "1121 Trinity Lane, Dwarka , Delhi, India",
      contactNo: "+91 9876543292",
      timing: "Tue-Thurs 9-5",
      blood : ["A+","A-","B+","B-","O+","O-"]
    }
  ];
  
  export default bloodDonationData;
  
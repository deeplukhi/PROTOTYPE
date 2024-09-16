// script.js

// Function to get the selected value from a dropdown
function getSelectedValue(dropdown) {
    return dropdown.value; // Gets the selected value
  }
  
  // Get all elements with the class 'myDropdown'
  
  // // Loop through all dropdown elements and add an event listener
  // for (var i = 0; i < dropdowns.length; i++) {
  //   dropdowns[i].addEventListener("change", function() {
  //     var selectedValue = getSelectedValue(this); // 'this' refers to the current dropdown
  //     console.log("Selected value:", selectedValue); // Output to the console
  //   });
  // }
  
  function updateIPCDescription() {
    // Get the selected value from the dropdown
    var crimeCode = document.getElementById("crimeCode").value;
    
    // Get the textarea element
    var ipcDescription = document.getElementById("ipcDescription");
    
    // Determine the IPC breakdown based on the selected value
    var breakdown;
    switch (crimeCode) {
      case "302":
        breakdown = "IPC Section 302: Murder - This section deals with punishment for murder.";
        break;
      case "376":
        breakdown = "IPC Section 376: Rape - This section deals with punishment for rape.";
        break;
      case "420":
        breakdown = "IPC Section 420: Cheating - This section deals with punishment for cheating.";
        break;
      default:
        breakdown = "Please select an IPC section to see the breakdown.";
    }
    
    // Update the textarea with the breakdown
    ipcDescription.value = breakdown;
  }
  
  // Get the button element
  var button = document.querySelector(".button");
  
  // Add event listener to the button to trigger IPC description update
  button.addEventListener("click", updateIPCDescription);
  
  document.addEventListener("DOMContentLoaded", function() {
    // Function to validate form
    function validateForm() {
        let crimeCode = document.getElementById("crimeCode").value;
        let area = document.querySelector("input[name='state']").value;
        let pincode = document.querySelector("input[placeholder='Enter your pincode']").value;
        let caste = document.querySelector("input[placeholder='Enter your caste']").value;
        let age = document.querySelector("input[placeholder='Enter your age']").value;
        let gender = document.querySelector("input[name='gender']:checked");
        
        // Alert if any required field is not selected or empty
        if (!crimeCode) {
            alert("Please select a crime/IPC section.");
            return false;
        }
        if (!area) {
            alert("Please enter the area/zone.");
            return false;
        }
        if (!pincode || !/^\d{6}$/.test(pincode)) {
            alert("Please enter a valid 6-digit pincode.");
            return false;
        }
        if (!caste) {
            alert("Please enter your caste.");
            return false;
        }
        if (!age || isNaN(age) || age <= 0) {
            alert("Please enter a valid age.");
            return false;
        }
        if (!gender) {
            alert("Please select a gender.");
            return false;
        }
        return true;
    }
  
    // Function to add more rows for past crimes
    function addMoreCrimeRows() {
        const table = document.querySelector(".crime-table tbody");
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td><input type="text" placeholder="Enter IPC code"></td>
            <td><input type="text" placeholder="Enter Area/Zone"></td>
            <td class="radio-buttons">
                <label><input type="radio" name="bail_last_time${table.rows.length}" value="yes"> Yes</label>
                <label><input type="radio" name="bail_last_time${table.rows.length}" value="no"> No</label>
            </td>
            <td><input type="text" placeholder="Duration (months)"></td>
        `;
        table.appendChild(newRow);
    }
  
    // Add more button event listener
    document.querySelector(".form-group").innerHTML = '<button id="addMore" type="button">Add More</button>';
    document.getElementById("addMore").addEventListener("click", addMoreCrimeRows);
  
    // Check Bail button click event
    document.querySelector(".button").addEventListener("click", function() {
        if (validateForm()) {
            document.querySelector(".disclaimer-final").style.display = "block";
            document.querySelector(".bail-info").style.display = "block";
            document.querySelector(".bail-score").style.display = "block";
        }
    });
  
    // Only allow numbers for Pincode and Age fields
    document.querySelector("input[placeholder='Enter your pincode']").addEventListener("input", function(e) {
        e.target.value = e.target.value.replace(/\D/g, '');
    });
  
    document.querySelector("input[placeholder='Enter your age']").addEventListener("input", function(e) {
        e.target.value = e.target.value.replace(/\D/g, '');
    });
  
    // Initially hide bail information and disclaimer
    document.querySelector(".disclaimer-final").style.display = "none";
    document.querySelector(".bail-info").style.display = "none";
    document.querySelector(".bail-score").style.display = "none";
  });
  
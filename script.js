function getSelectedValue(dropdown) {
    return dropdown.value; // Gets the selected value
}

function updateIPCDescription() {
    // Get the selected value from the dropdown
    var crimeCode = document.getElementById("crimeCode").value;
    
    // Get the textarea element
    var ipcDescription = document.getElementById("ipcDescription");
    
    // Determine the IPC breakdown based on the selected value
    var breakdown;
    switch (crimeCode) {
        case "304":
            breakdown = "IPC Section 304: Culpable Homicide Not Amounting to Murder - Punishment for culpable homicide not amounting to murder.";
            break;
        case "306":
            breakdown = "IPC Section 306: Abetment of Suicide - Punishment for abetting suicide.";
            break;
        case "307":
            breakdown = "IPC Section 307: Attempt to Murder - Punishment for attempting to commit murder.";
            break;
        case "323":
            breakdown = "IPC Section 323: Punishment for Voluntarily Causing Hurt - Deals with causing hurt.";
            break;
        case "324":
            breakdown = "IPC Section 324: Voluntarily Causing Hurt by Dangerous Weapons - Punishment for causing hurt with dangerous weapons.";
            break;
        case "325":
            breakdown = "IPC Section 325: Punishment for Voluntarily Causing Grievous Hurt.";
            break;
        case "420":
            breakdown = "IPC Section 420: Cheating - Deals with punishment for cheating.";
            break;
        case "376":
            breakdown = "IPC Section 376: Rape - Punishment for rape.";
            break;
        case "506":
            breakdown = "IPC Section 506: Criminal Intimidation - Punishment for criminal intimidation.";
            break;
        default:
            breakdown = "Please select an IPC section to see the breakdown.";
    }
    
    // Update the textarea with the breakdown
    ipcDescription.value = breakdown;
}

// Add event listener to the button to trigger IPC description update
document.querySelector(".button").addEventListener("click", updateIPCDescription);

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

    // Add event listener for adding more rows
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

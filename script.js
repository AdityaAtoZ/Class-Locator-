const classData = {
  "LT201": { floor: "1st Floor", location: "front", side: "right side" },
  "LT202": { floor: "1st Floor", location: "front", side: "left side" },
  "LT301": { floor: "2nd Floor", location: "front", side: "right side" },
  "LT402": { floor: "3rd Floor", location: "front", side: "left side" },
  "LT601": { floor: "5th Floor", location: "front", side: "left side" },
  "LT602": { floor: "5th Floor", location: "front", side: "right side" },
  "Prof. KP Nautiyal Auditorium": { floor: "5th Floor", location: "front", side: "left side" },
  "Seminar hall": { floor: "Ground Floor", location: "front", side: "Center" }
};

function findClassLocation() {
  const sectionSelect = document.getElementById("sectionSelect").value;
  const classInput = document.getElementById("classInput").value;
  let classCode;

  if (sectionSelect === "LT") {
    classCode = "LT" + classInput;
  } else {
    classCode = sectionSelect;
  }

  const resultElement = document.getElementById("result");

  if (classData[classCode]) {
    const { floor, location, side } = classData[classCode];
    resultElement.textContent = `${classCode} is on ${floor} - ${location} part, ${side} of the college.🫡`;
  } else {
    resultElement.textContent = "Not found (Try refreshing) 😐";
  }
  resultElement.focus();
}

function toggleClassInput() {
  const sectionSelect = document.getElementById("sectionSelect");
  const classInput = document.getElementById("classInput");

  if (sectionSelect.value === "LT") {
    classInput.style.display = "block";
  } else {
    classInput.style.display = "none";
  }
}
//all user button function
async function fetchAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    let html = "";

    await Promise.all(
      users.map(async (user) => {
        const if_user_exist = await findUser(user.id);
        if (if_user_exist) {
          html += `<div class="user-card">
                    <div class="user-info"><strong>Name:</strong> ${user.name}</div>
                    <div class="user-info"><strong>Email:</strong> ${user.email}</div>
                    <div class="user-info"><strong>Phone:</strong> ${user.phone}</div>
                    <div class="user-info"><strong>Website:</strong> ${user.website}</div>
                    <div class="user-info"><strong>City:</strong> ${user.address.city}</div>
                    <div class="user-info"><strong>Company:</strong> ${user.company.name}</div>
                    <button id="add_button_${user.id}" style="background-color: green; color: white; cursor: pointer; display: none;" onclick="addUser('${user.id}', '${user.name}', '${user.email}', '${user.phone}', '${user.website}', '${user.address.city}', '${user.company.name}')">Add</button>
                    <button id="open_button_${user.id}" style="display: block;cursor: pointer; background-color: yellow; color: black;" onclick="openUser(${user.id}, '${user.name}', '${user.company.name}')">Open</button>
                </div>`;
        } else {
          html += `<div class="user-card">
                    <div class="user-info"><strong>Name:</strong> ${user.name}</div>
                    <div class="user-info"><strong>Email:</strong> ${user.email}</div>
                    <div class="user-info"><strong>Phone:</strong> ${user.phone}</div>
                    <div class="user-info"><strong>Website:</strong> ${user.website}</div>
                    <div class="user-info"><strong>City:</strong> ${user.address.city}</div>
                    <div class="user-info"><strong>Company:</strong> ${user.company.name}</div>
                    <button id="add_button_${user.id}" style="background-color: green; cursor: pointer; color: white;" onclick="addUser('${user.id}', '${user.name}', '${user.email}', '${user.phone}', '${user.website}', '${user.address.city}', '${user.company.name}')">Add</button>
                    <button id="open_button_${user.id}" style="display: none; background-color: yellow; cursor: pointer; color: black;" onclick="openUser(${user.id}, '${user.name}', '${user.company.name}')">Open</button>
                </div>`;
        }
      })
    );

    document.getElementById("userList").innerHTML = html;
  } catch (err) {
    console.error("Error fetching users:", err);
  }
}

////add user button function
async function addUser(id, name, email, phone, website, city, company) {
  const user_id = id;
  try {
    const response = await fetch("http://localhost:3000/user/add/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id,
        name,
        email,
        phone,
        website,
        city,
        company,
      }),
    });

    if (response.ok) {
      alert("User added successfully");
      document.getElementById(`add_button_${user_id}`).style.display = "none";
      document.getElementById(`open_button_${user_id}`).style.display = "block";
    } else {
      const errorData = await response.json();
      alert(errorData.message);

      // document.getElementById(`add_button_${user_id}`).style.display = "none";
      // document.getElementById(`open_button_${user_id}`).style.display = "block";
    }
  } catch (err) {
    alert("Error adding user:", err);
  }
}

//open button function
function openUser(userId, userName, companyName) {
  window.location.href = `post.html?userId=${userId}&userName=${userName}&companyName=${companyName}`;
}

async function findUser(id) {
  const user_id = id;
  try {
    const response = await fetch(
      `http://localhost:3000/user/get/user?user_id=${user_id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.error("Error:", err.message);
  }
}

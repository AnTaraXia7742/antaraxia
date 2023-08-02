document.addEventListener("DOMContentLoaded", function () {
  const userData = JSON.parse(sessionStorage.getItem("myUser"));
  const dataDisplay = document.getElementById("dataDisplay");

  function validate(event) {
    // Kode validasi yang sesuai
  }

  // Fungsi untuk menampilkan nilai Ipk di input #Ipk
  function showIpk(IpkValue) {
    document.getElementById("Ipk").value = IpkValue;
  }

  if (userData && userData.length > 0) {
    let html =
      "<table border='1'><tr><th>Nama</th><th>Npm</th><th>Email</th><th>Nomor HP</th><th>Semester Saat Ini</th><th>Ipk</th><th>Pilihan Beasiswa</th><th>Nama File</th></tr>";
    userData.forEach(function (user) {
      html += `
              <tr>
                  <td>${user.myName}</td>
                  <td>${user.myNpm}</td>
                  <td>${user.myEmail}</td>
                  <td>${user.myHandphone}</td>
                  <td>${user.mySemester}</td>
                  <td>${user.myIpk}</td>
                  <td>${user.myBeasiswa}</td>
                  <td>${user.myFile}</td>
              </tr>
          `;
    });
    html += "</table>";
    dataDisplay.innerHTML = html;
  } else {
    dataDisplay.innerHTML = "<p>Tidak ada data pendaftar beasiswa.</p>";
  }
});

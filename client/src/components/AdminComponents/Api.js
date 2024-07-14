import axios from "axios";

export async function fetchData() {
  try {
    const response = await axios.post("http://localhost:8000/sendData2", {});
    if (response.data === "fail") {
      alert("Failed to fetch data");
    } else {
      setData(
        response.data.map((item, index) => ({ ...item, serial: index + 1 }))
      );
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function fetchData2() {
  try {
    const response = await axios.post("http://localhost:8000/sendData3", {});
    if (response.data === "fail") {
      alert("Failed to fetch data");
    } else {
      setData2(
        response.data.map((item, index) => ({ ...item, serial: index + 1 }))
      );
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
export async function fetchData3() {
  try {
    const response = await axios.post("http://localhost:8000/sendData4", {});
    if (response.data === "fail") {
      alert("Failed to fetch data");
    } else {
      setData3(
        response.data.map((item, index) => ({ ...item, serial: index + 1 }))
      );
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

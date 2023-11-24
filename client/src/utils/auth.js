 export const checklogin=async()=>{
    const user=JSON .parse(localStorage.getItem("user"))|| null;
    if(!user){
        alert("Please login First!");
        window.location.href="/login";
    }
}
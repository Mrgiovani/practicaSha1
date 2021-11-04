async function  cifrar(){
    var input_pass = document.getElementById("pass");
    console.log(input_pass.value);
    var value = input_pass.value;
    // input_pass.value = sha1(input_pass.value);
    const msgUint8 = new TextEncoder().encode(value);
    const digest = await crypto.subtle.digest('SHA-1',msgUint8)
    // console.log(digest);
    const hashArray = Array.from(new Uint8Array(digest));
    const hastHex = hashArray.map(x => x.toString(16).padStart(2,'0')).join('');
    console.log(hastHex)
}

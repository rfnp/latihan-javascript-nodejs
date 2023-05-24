try {
    console.log("Awal blok try");
    errorCode;
    console.log("Akhir blok try");
} catch (error) {
    console.log("Terjadi error!");
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

try {
    console.log("Awal blok try");
    console.log("Akhir blok try");
} catch (error) {
    console.log("Baris ini diabaikan");
} finally {
    console.log("Akan tetap dieksekusi");
}

const json = '{ "name": "Yoda", "age": 20 }';
// const json = '{ bad json }'; // error
// const json = '{ "age": 20 }'; // doesn't have name, error handling will not catch it. Need to modify the code

try {
    const user = JSON.parse(json);

    if (!user.name) {
        throw new SyntaxError("'name' is required.");
    }

    errorCode;

    console.log(user.name);
    console.log(user.age);
} catch (error) {
    // console.log(error.name);
    // console.log(error.message);
    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`); //show error if name is empty
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}
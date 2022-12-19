function a() {
  const obj = null;
  try {
    console.log(obj.name);
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    else console.log(error);
  }
}
a();

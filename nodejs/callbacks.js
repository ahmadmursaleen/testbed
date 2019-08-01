const func1 = (val, done) => {
  console.log(val);
  val = "from func1";
  done(val);
};

func1("from call", callback => {
  console.log(callback);
});

const sum = (... args) => {
    const argument = [args];
    return args.reduce((a, b) => a + b, 0);
  }
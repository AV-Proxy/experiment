function argumentsOptional() {
  var args = Array.from(arguments);

  return args.some(elem => typeof elem !== 'number')
    ? undefined
    : args.length > 1
      ? args.reduce((a, b) => a += b)
      : num => typeof num === "number"
        ? num + args[0]
        : undefined;
}

argumentsOptional(2)([3]);
argumentsOptional(2)(3);
argumentsOptional(2, 3);
argumentsOptional(2, "3");

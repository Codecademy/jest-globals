export type Mock<T extends (...args: any) => any> = jest.Mock<
  ReturnType<T>,
  Parameters<T>
>;

export const fn = <T extends (...args: any) => any>(implementation?: T) =>
  jest.fn<ReturnType<NonNullable<T>>, jest.ArgsType<T>>(implementation);

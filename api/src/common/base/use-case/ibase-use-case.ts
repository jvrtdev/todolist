export abstract class IBaseUseCase<E, D> {
  abstract execute(data: D): Promise<E>
}

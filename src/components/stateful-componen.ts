export class StatefulComponent<TState> {
  constructor(private state: TState) {}

  getState() {
    return this.state;
  }

  setState(newState: Partial<TState>) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  render() {}
}

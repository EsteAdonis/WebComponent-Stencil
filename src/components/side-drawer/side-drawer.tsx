import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'uc-side-drawer',
  styleUrl: './side-drawer.css',
  shadow: true
})

export class SideDrawer {
  @Prop() header: string = '';

  render() {
    return (
      <aside>
        <header><h1>{this.header}</h1></header>
        <main>
          <slot></slot>
        </main>
      </aside>
    )
  }
}

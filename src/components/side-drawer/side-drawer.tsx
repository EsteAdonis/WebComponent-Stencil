import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'uc-side-drawer',
  styleUrl: './side-drawer.css',
  shadow: true
})

export class SideDrawer {
  @Prop({ reflect: true }) header: string = '';
  @Prop({ reflect: true, mutable: true }) open: boolean = false;

  onCloseDrawer() {
    this.open = false;
  }


  render() {
    // let content = null;
    // if (this.open) {
    //   content = (
    //     <aside>
    //     <header><h1>{this.header}</h1></header>
    //     <main>
    //       <slot></slot>
    //     </main>
    //   </aside>        
    //   )
    // }
    
    return (
      <aside>
        <header>
          <h1>{this.header}</h1>
          <button onClick={this.onCloseDrawer.bind(this)}>X</button>
        </header>
        <section id="tabs">
          <button class="active">Navigation</button>
          <button>Contact</button>
        </section>
        <main>
          <slot></slot>
        </main>
      </aside>
    )
  }
}

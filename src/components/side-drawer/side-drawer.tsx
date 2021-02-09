import { Component, h, Prop } from '@stencil/core/internal';

@Component({
  tag: 'jm-side-drawer',
  styleUrl: './side-drawer.css',
  shadow: true,
})
export class SideDrawer {
  @Prop({ reflect: true }) title: string;

  render() {
    return (
      <aside>
        <header><h1>{this.title}</h1></header>
        <main>
          <slot />
        </main>
      </aside>
    );
  }
}


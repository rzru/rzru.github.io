import { Howl } from 'howler';

let click: Howl;

const withClickSound = () => {
    if (!click) {
        click = new Howl({
            src: ['sounds/click.wav']
        });
    }

    return click
}

export default withClickSound;

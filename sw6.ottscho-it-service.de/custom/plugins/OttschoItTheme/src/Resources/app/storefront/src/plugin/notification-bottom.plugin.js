    import Plugin from 'src/plugin-system/plugin.class';

    export default class NotificationBottomPlugin extends Plugin {
        init() {
            window.addEventListener('scroll', this.onScroll.bind(this));
        }

        onScroll() {
            if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
                alert('random');
            }
        }
    }
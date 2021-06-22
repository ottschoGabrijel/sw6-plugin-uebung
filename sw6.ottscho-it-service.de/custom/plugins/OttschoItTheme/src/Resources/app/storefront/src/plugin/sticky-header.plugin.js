    import Plugin from 'src/plugin-system/plugin.class';

    export default class stickyHeaderPlugin extends Plugin {
        init() {
            console.log('test')
            window.addEventListener('scroll', this.onScroll.bind(this));
        }

        onScroll() {
            if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
                alert('Seems like there\'s nothing more to see here.');
            }
        }
    }
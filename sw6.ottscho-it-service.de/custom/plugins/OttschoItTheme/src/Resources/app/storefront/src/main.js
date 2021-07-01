import stickyHeaderPlugin from './plugin/sticky-header.plugin';
import NotificationBottomPlugin from './plugin/notification-bottom.plugin';

// Register your plugin via the existing PluginManager
const PluginManager = window.PluginManager;
console.log('test2');
PluginManager.register('stickyHeaderPlugin', stickyHeaderPlugin, '.header-main');
PluginManager.register('NotificationBottomPlugin', NotificationBottomPlugin);
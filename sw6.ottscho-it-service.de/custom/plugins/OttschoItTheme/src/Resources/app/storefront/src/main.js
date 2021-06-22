import stickyHeaderPlugin from './plugin/sticky-header.plugin';

// Register your plugin via the existing PluginManager
const PluginManager = window.PluginManager;
console.log('test2');
PluginManager.register('stickyHeaderPlugin', stickyHeaderPlugin, '.header-main');
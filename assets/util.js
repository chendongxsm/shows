let func = {
    initIconFont () {
        let domModule = weex.requireModule('dom');
        domModule.addRule('fontFace', {
            'fontFamily': "iconfont",
            'src': "url('http://at.alicdn.com/t/font_755393_cmuzkfv0ob7.ttf')"
        });
        var modal = weex.requireModule('modal')
        modal.toast({
            message: 'This is a toast',
            duration: 2
        })
    },
}
export default func
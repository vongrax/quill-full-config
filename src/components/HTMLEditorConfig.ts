import { Quill } from 'react-quill';

export const HTMLEditorConfig = (quil: typeof Quill,plugin:any) => {
    const Font = quil.import('formats/font');
    quil.register('modules/imageResize', plugin);
    const Size = quil.import('attributors/style/size');

    Size.whitelist = [
        "9px",
        "10px",
        "11px",
        "12px",
        "14px",
        "16px",
        "18px",
        "20px",
        "22px",
        "24px",
        "26px",
        "28px",
    ];

    Font.whitelist = [
        'BalsamiqSans',
        'Caveat',
        'Comfortaa',
        'Inter',
        'Lobster',
        'Merriweather',
        'Montserrat',
        'Mulish',
        'PlayfairDisplay',
        'Raleway',
        'Roboto',
        'Rubik'
    ];

    quil.register(Font, true);
    quil.register(Size, true);

    const modules = {
        toolbar: [
            [{header: [1, 2, 3, 4, 5, 6, false]}],
            [{ size: Size.whitelist,},],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{list: 'ordered'}, {list: 'bullet'}],
            [{align: ''}, {align: 'center'}, {align: 'right'}, {align: 'justify'}],
            ['link', 'image'],
            [{color: []}, {background: []}],
            [{font: Font.whitelist}],
            ['clean'],
            ['undo', 'redo']
        ],
        imageResize: {
            parchment: Quill.import('parchment'),
            modules: ['Resize', 'DisplaySize'],
        },
    };

    const formats = [
        'header',
        'font',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'background',
        'code',
        'script',
        'list',
        'bullet',
        'indent',
        'link',
        'image',
        'video',
        'align',
        'color',
        'size'
    ];

    return {
        formats,
        modules,
    };
};

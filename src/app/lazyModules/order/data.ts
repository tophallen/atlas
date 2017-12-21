import { TreeNode } from 'primeng/primeng';

export const nodes: TreeNode[] =
        [
                {
                        "data": {
                                "name": "Documents",
                                "size": "75kb",
                                "type": "Folder",
                                "expandedIcon": "fa-folder-open",
                                "collapsedIcon": "fa-folder-open",
                        },
                        "children": [
                                {
                                        "data": {
                                                "name": "Work",
                                                "size": "55kb",
                                                "type": "Folder"
                                        },
                                        "children": [
                                                {
                                                        "data": {
                                                                "name": "Expenses.doc",
                                                                "size": "30kb",
                                                                "type": "Document",
                                                                "expandedIcon": "fa-folder-open",
                                                                "collapsedIcon": "fa-folder-open",
                                
                                                        }
                                                },
                                                {
                                                        "data": {
                                                                "name": "Resume.doc",
                                                                "size": "25kb",
                                                                "type": "Resume"
                                                        }
                                                }
                                        ]
                                },
                                {
                                        "data": {
                                                "name": "Home",
                                                "size": "20kb",
                                                "type": "Folder"
                                        },
                                        "children": [
                                                {
                                                        "data": {
                                                                "name": "Invoices",
                                                                "size": "20kb",
                                                                "type": "Text"
                                                        }
                                                }
                                        ]
                                }
                        ]
                },
                {
                        "data": {
                                "name": "Pictures",
                                "size": "150kb",
                                "type": "Folder"
                        },
                        "children": [
                                {
                                        "data": {
                                                "name": "barcelona.jpg",
                                                "size": "90kb",
                                                "type": "Picture"
                                        }
                                },
                                {
                                        "data": {
                                                "name": "primeui.png",
                                                "size": "30kb",
                                                "type": "Picture"
                                        }
                                },
                                {
                                        "data": {
                                                "name": "optimus.jpg",
                                                "size": "30kb",
                                                "type": "Picture"
                                        }
                                }
                        ]
                }
        ];
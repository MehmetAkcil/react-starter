import { PropTypes } from 'prop-types';
import DataTable from 'react-data-table-component';


const Table = ({ dataList, columns }) => {

    const customStyles = {
        table: {
            style: {
                backgroundColor: 'transparent'
            }
        },
        headCells: {
            style: {
                backgroundColor: 'rgb(245 245 245)',
                fontSize: '15px',
            },
        },
        cells: {
            style: {
                paddingLeft: '17px',
                paddingRight: '17px'
            },
        },
        headRow: {
            style: {
                backgroundColor: 'rgb(245 245 245)',
                minHeight: '35px',
                border: 'none',
                borderRadius: '7px',
                overflow: 'hidden'
            },
        },
        tableWrapper: {
            style: {
                display: 'table',
            },
        },
        responsiveWrapper: {
            style: {},
        },
        rows: {
            style: {
                fontSize: '13px',
                fontWeight: 400,
                backgroundColor: 'rgb(235 235 235)',
                borderRadius: '7px',

                marginTop: '10px',
                minHeight: '48px',
                '&:not(:last-of-type)': {
                    border: 'none'
                },
            }
        },
        pagination: {
            style: {
                borderTopStyle: 'solid',
                borderTopWidth: '0px',
                borderTopColor: '',
            }
        }
    };

    const paginationComponentOptions = {
        rowsPerPageText: 'Kac Adet Gosterilsin',
        rangeSeparatorText: 'tr',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Hepsi',
    };


    return (
        <>
            {dataList && (
                <DataTable
                    columns={columns}
                    data={dataList}
                    customStyles={customStyles}
                    pagination
                    paginationComponentOptions={paginationComponentOptions}
                />
            )}
        </>
    )
}


Table.propTypes = {
    dataList: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired
}

export default Table;
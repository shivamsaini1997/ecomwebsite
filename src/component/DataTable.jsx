    import React, { useState, useEffect } from 'react';
    import { classNames } from 'primereact/utils';
    import { FilterMatchMode, FilterOperator } from 'primereact/api';
    import { DataTable } from 'primereact/datatable';
    import { Column } from 'primereact/column';
    import { InputText } from 'primereact/inputtext';
    import { Dropdown } from 'primereact/dropdown';
    import { InputNumber } from 'primereact/inputnumber';
    import { Button } from 'primereact/button';
    import { ProgressBar } from 'primereact/progressbar';
    import { Calendar } from 'primereact/calendar';
    import { MultiSelect } from 'primereact/multiselect';
    import { Slider } from 'primereact/slider';
    import { Tag } from 'primereact/tag';
    import { TriStateCheckbox } from 'primereact/tristatecheckbox';
    import { CustomerService } from '../Supplier/Pages/CustomerService';

    export default function AdvancedFilterDemo() {
        const [customers, setCustomers] = useState(null);
        const [filters, setFilters] = useState(null);
        const [loading, setLoading] = useState(false);
        const [globalFilterValue, setGlobalFilterValue] = useState('');
        const [representatives] = useState([

        ]);
        const [Quantityes] = useState(['unqualified', 'qualified', 'new', 'negotiation', 'renewal']);

        const getSeverity = (Quantity) => {
            switch (Quantity) {
                case 'unqualified':
                    return 'danger';

                case 'qualified':
                    return 'success';

                case 'new':
                    return 'info';

                case 'negotiation':
                    return 'warning';

                case 'renewal':
                    return null;
            }
        };
        useEffect(() => {
            CustomerService.getCustomersMedium().then((data) => {
                setCustomers(getCustomers(data));
                setLoading(false);
            });
            initFilters();
        }, []);

        const QcBodyTemplate = (rowData) => {
            // Assuming rowData.qc contains a percentage value
            return rowData.qc ? <span className='panding-color'>Panding</span> : 'Not Available';
        };
    
        const availabilityBodyTemplate = (rowData) => {
            // Assuming rowData.availability contains a boolean value
            return rowData.availability ? <span className='out-line'>Mark out of Stock</span> : 'Not Available';
        };
    
        const actionBodyTemplate = (rowData) => {
            // Assuming rowData.action contains a string representing an action
            return <div className='d-flex'> 
            <a href="#"label={rowData.action }><img className='view-product-icon prod-icon' src="images/eye-regular 1.svg"/></a>
            <a href="#"label={rowData.action }><img className='edit-product-icon prod-icon' src="images/mode_edit.svg"/></a>
            <a href="#"label={rowData.action }><img className='delete-product-icon prod-icon' src="images/delete_24px.svg"/></a>
            </div>
            ;
        };

        
        const getCustomers = (data) => {
            return [...(data || [])].map((d) => {
                d.date = new Date(d.date);

                return d;
            });
        };

        const formatDate = (value) => {
            return value.toLocaleDateString('en-US', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            });
        };

        const formatCurrency = (value) => {
            return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        };

        const clearFilter = () => {
            initFilters();
        };

        const onGlobalFilterChange = (e) => {
            const value = e.target.value;
            let _filters = { ...filters };

            _filters['global'].value = value;

            setFilters(_filters);
            setGlobalFilterValue(value);
        };

        const initFilters = () => {
            setFilters({
                global: { value: null, matchMode: FilterMatchMode.CONTAINS },
                name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
                'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
                representative: { value: null, matchMode: FilterMatchMode.IN },
                date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
                balance: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
                Quantity: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
                qc: { value: null, matchMode: FilterMatchMode.BETWEEN },
                verified: { value: null, matchMode: FilterMatchMode.EQUALS }
            });
            setGlobalFilterValue('');
        };

        const renderHeader = () => {
            return (
                <div className="d-flex justify-content-between mt-5">
                <div>
                <Button type="button" icon="pi pi-filter-slash"  className='All btn-data' label="All (130)" />
                <Button type="button" icon="pi pi-filter-slash" className='Approved btn-data' label="Approved (86)" />
                <Button type="button" icon="pi pi-filter-slash" className='Pending btn-data' label="Pending (36)" />
                <Button type="button" icon="pi pi-filter-slash"className='Declined btn-data' label="Declined (9)" />
    
                </div>
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                <span className='fw-bold'> Search</span> <InputText className='searchinputtable' value={globalFilterValue} onChange={onGlobalFilterChange} />
                </span>
            </div>
            );
        };

        const countryBodyTemplate = (rowData) => {
            return (
                <div className="flex align-items-center gap-2">
                    {/* <img alt="flag" src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`flag flag-${rowData.country.code}`} style={{ width: '24px' }} /> */}
                    <span>{rowData.country.name}</span>
                </div>
            );
        };

        const filterClearTemplate = (options) => {
            return <Button type="button" icon="pi pi-times" onClick={options.filterClearCallback} severity="secondary"></Button>;
        };

        const filterApplyTemplate = (options) => {
            return <Button type="button" icon="pi pi-check" onClick={options.filterApplyCallback} severity="success"></Button>;
        };

        const filterFooterTemplate = () => {
            return <div className="px-3 pt-0 pb-3 text-center">Filter by Country</div>;
        };

        const representativeBodyTemplate = (rowData) => {
            const representative = rowData.representative;

            return (
                <div className="flex align-items-center gap-2">
                    {/* <img alt={representative.name} src={`https://primefaces.org/cdn/primereact/images/avatar/${representative.image}`} width="32" /> */}
                    <span>{representative.name}</span>
                </div>
            );
        };

        const representativeFilterTemplate = (options) => {
            return <MultiSelect value={options.value} options={representatives} itemTemplate={representativesItemTemplate} onChange={(e) => options.filterCallback(e.value)} optionLabel="name" placeholder="Any" className="p-column-filter" />;
        };

        const representativesItemTemplate = (option) => {
            return (
                <div className="flex align-items-center gap-2">
                    {/* <img alt={option.name} src={`https://primefaces.org/cdn/primereact/images/avatar/${option.image}`} width="32" /> */}
                    <span>{option.name}</span>
                </div>
            );
        };

        const dateBodyTemplate = (rowData) => {
            return formatDate(rowData.date);
        };

        const dateFilterTemplate = (options) => {
            return <Calendar value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" mask="99/99/9999" />;
        };

        const balanceBodyTemplate = (rowData) => {
            return formatCurrency(rowData.balance);
        };

        const balanceFilterTemplate = (options) => {
            return <InputNumber value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} mode="currency" currency="USD" locale="en-US" />;
        };

        const QuantityBodyTemplate = (rowData) => {
            return <Tag value={rowData.Quantity} severity={getSeverity(rowData.Quantity)} />;
        };

        const QuantityFilterTemplate = (options) => {
            return <Dropdown value={options.value} options={Quantityes} onChange={(e) => options.filterCallback(e.value, options.index)} itemTemplate={QuantityItemTemplate} placeholder="Select One" className="p-column-filter" showClear />;
        };

        const QuantityItemTemplate = (option) => {
            return <Tag value={option} severity={getSeverity(option)} />;
        };

        // const QcBodyTemplate = (rowData) => {
        //     return <ProgressBar value={rowData.qc} showValue={false} style={{ height: '6px' }}></ProgressBar>;
        // };

        const qcFilterTemplate = (options) => {
            return (
                <React.Fragment>
                    <Slider value={options.value} onChange={(e) => options.filterCallback(e.value)} range className="m-3"></Slider>
                    <div className="flex align-items-center justify-content-between px-2">
                        <span>{options.value ? options.value[0] : 0}</span>
                        <span>{options.value ? options.value[1] : 100}</span>
                    </div>
                </React.Fragment>
            );
        };

        const verifiedBodyTemplate = (rowData) => {
            return <i className={classNames('pi', { 'text-green-500 pi-check-circle': rowData.verified, 'text-red-500 pi-times-circle': !rowData.verified })}></i>;
        };

        const verifiedFilterTemplate = (options) => {
            return (
                <div className="flex align-items-center gap-2">
                    <label htmlFor="verified-filter" className="font-bold">
                        Verified
                    </label>
                    <TriStateCheckbox inputId="verified-filter" value={options.value} onChange={(e) => options.filterCallback(e.value)} />
                </div>
            );
        };

        const header = renderHeader();

        return (
            <div className="card card-table">
                <DataTable value={customers} paginator showGridlines rows={10} loading={loading} dataKey="id"  className='mb-5'
                        filters={filters} globalFilterFields={['S.no', 'Product ID', 'SKU', 'Created Date', 'Quantity', 'Availability','Action']} header={header}
                        emptyMessage="No customers found.">
                    <Column field="name" header="S.no" filterPlaceholder="Search by name" style={{ minWidth: '3rem' }} />

                    <Column header="Category" filterField="country.name" style={{ minWidth: '6rem' }} body={countryBodyTemplate}
                    filterPlaceholder="Search by country" filterClear={filterClearTemplate} 
                        filterApply={filterApplyTemplate} filterFooter={filterFooterTemplate} />

                        <Column header="Product ID" filterField="representative" showFilterMatchModes={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }}
                        body={representativeBodyTemplate}  filterElement={representativeFilterTemplate} />

                    <Column header=" SKU" filterField="balance" dataType="numeric" style={{ minWidth: '6rem' }} body={balanceBodyTemplate}  filterElement={balanceFilterTemplate} />

                    <Column header="Created Date" filterField="date" dataType="date" style={{ minWidth: '8rem' }} body={dateBodyTemplate}   filterElement={dateFilterTemplate} />


                    <Column field="Quantity" header="Quantity" filterMenuStyle={{ width: '8rem' }} style={{ minWidth: '6rem' }} filterElement={QuantityFilterTemplate} />

                    <Column 
                    // other columns
                />
                <Column 
                    field="qc" 
                    header="QC Status" 
                    showFilterMatchModes={false} 
                    style={{ minWidth: '6rem' }} 
                    body={QcBodyTemplate} 
                />
                <Column 
                    field="availability" 
                    header="Availability" 
                    dataType="boolean" 
                    bodyClassName="text-center" 
                    style={{ minWidth: '8rem' }} 
                    body={availabilityBodyTemplate} 
                />
                <Column 
                    field="action" 
                    header="Action" 
                    dataType="boolean" 
                    bodyClassName="text-center" 
                    style={{ minWidth: '8rem' }} 
                    body={actionBodyTemplate} 
                />
                
                </DataTable>
            </div>
        );
    }
            
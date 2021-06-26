import React from 'react';
import {render} from '@testing-library/react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import Title from '../Title'
import TotalApps from '../TotalApps'
import Shortlist from '../Shortlist'
import RejectedApps from '../RejectedApps'
import AppGraph from '../AppGraph'
import AppBarGraph from '../AppBarGraph'
import Referrals from '../Referrals'
import Open from '../Open'
import NewApp from '../NewApp'

it("Sidebar renders correctly", () => {
    const {queryByTestId} = render(<Sidebar />)
    expect(queryByTestId('sidebar')).toBeTruthy();
})

it("Navbar renders correctly", () => {
    const {queryByTestId} = render(<Navbar />)
    expect(queryByTestId('navbar')).toBeTruthy();
})

it("Title component renders correctly", () => {
    const {queryByTestId} = render(<Title />)
    expect(queryByTestId('title')).toBeTruthy();
})

it("TotalApps renders correctly", () => {
    const {queryByTestId} = render(<TotalApps />)
    expect(queryByTestId('totalApps')).toBeTruthy();
})

it("Shortlist component renders correctly", () => {
    const {queryByTestId} = render(<Shortlist />)
    expect(queryByTestId('shortlist')).toBeTruthy();
})

it("Rejected app componentrenders correctly", () => {
    const {queryByTestId} = render(<RejectedApps />)
    expect(queryByTestId('rejectedApps')).toBeTruthy();
})

it("AppBarGraph component renders correctly", () => {
    const {queryByTestId} = render(<AppBarGraph />)
    expect(queryByTestId('appBarGraph')).toBeTruthy();
})

it("Referrals component renders correctly", () => {
    const {queryByTestId} = render(<Referrals />)
    expect(queryByTestId('referrals')).toBeTruthy();
})

it("NewApps component renders correctly", () => {
    const {queryByTestId} = render(<NewApp />)
    expect(queryByTestId('newApp')).toBeTruthy();
})
import React from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

@observer
export class MainApp extends React.Component {

	@observable activeTab = 0;

	@action
	onClickTab = (event, value) => {
		this.activeTab = value;
	}

	render() {
		return (
			<div>
				<Tabs value={this.activeTab} onChange={this.onClickTab}>
					<Tab label="One"/>
					<Tab label="Two"/>
				</Tabs>

				{ this.activeTab === 0 &&
					<p>This is Tab One</p>
				}
				{ this.activeTab === 1 &&
					<p>This is Tab Two</p>
				}
			</div>
		);
	}

}

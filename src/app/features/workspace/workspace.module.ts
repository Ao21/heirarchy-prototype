import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AttachAccountModule } from './entry/attach-account/attach-account.module';
import { ViewNodeModule } from './entry/view-node/view-node.module';
import { WorkspaceHistoryModule } from './entry/workspace-history/workspace-history.module';
import { WorkspaceMetadataModule } from './entry/workspace-metadata/workspace-metadata.module';
import { WorkspaceLayoutTestPageModule } from './pages/workspace-layout-test-page/workspace-layout-test-page.module';
import { WorkspaceRoutingModule } from './workspace-routing.module';
import { MoveNodeModule } from './entry/move-node/move-node.module';

@NgModule({
  declarations: [],
  imports: [
    AttachAccountModule,
    MoveNodeModule,
    CommonModule,
    ViewNodeModule,
    WorkspaceHistoryModule,
    WorkspaceLayoutTestPageModule,
    WorkspaceMetadataModule,
    WorkspaceRoutingModule
  ],
  entryComponents: [],
  providers: []
})
export class WorkspaceModule {}

<template>
    <div class="body-wrap">
        <el-row :gutter="24">
            <el-col :span="12" >
                <el-button :loading="running" size="medium" type="primary" @click="start">
                    <span v-if="!running">刮削</span>
                    <span v-else>刮削中...</span>
                </el-button>
                <el-button v-if="running" type="danger" size="medium" @click="stop">停止</el-button>
            </el-col>
            <el-col :span="9" >
                 <el-input width='auto' v-model="blur" placeholder="模糊查询"></el-input>
            </el-col>
        </el-row>

        <el-alert class="alter-tip"
            v-if="running"
            :title="tips"
            :closable="false"
            type="info">
        </el-alert>

        <el-table :data="scrapingrecords" 
                stripe 
                :default-sort = "{prop: 'updatetime', order: 'descending'}"
                @sort-change="changesort"
                :cell-style="{padding: '0', height: '50px'}" >
            <el-table-column label="原始名称" min-width="150" :show-overflow-tooltip="true"
                prop="srcname" >
            </el-table-column>
            <el-table-column label="原始地址" min-width="150" :show-overflow-tooltip="true"
                prop="srcpath" >
            </el-table-column>
            <el-table-column label="大小(MB)" width="80" 
                prop="srcsize" >
            </el-table-column>
            <el-table-column label="状态" width="80"
                sortable="custom"
                prop="status" >
                <template slot-scope="scope">
                    <span v-if="scope.row.status===0" >未刮削</span>
                    <span v-if="scope.row.status===1" >完成</span>
                    <span v-if="scope.row.status===2" >失败</span>
                    <span v-if="scope.row.status===3" >忽略</span>
                </template>
            </el-table-column>
            <el-table-column label="刮削用名称" min-width="120" :show-overflow-tooltip="true"
                prop="scrapingname" >
            </el-table-column>
            <el-table-column label="强制中文" width="100"
                sortable="custom"
                prop="cnsubtag" >
                <template slot-scope="scope">
                    <span v-if="scope.row.cnsubtag===true" >开启</span>
                    <span v-if="scope.row.cnsubtag===false" ></span>
                </template>
            </el-table-column>
            <el-table-column label="刮削后名称" min-width="150" :show-overflow-tooltip="true"
                prop="destname">
            </el-table-column>
            <el-table-column label="刮削后路径" min-width="150" :show-overflow-tooltip="true"
                prop="destpath" >
            </el-table-column>
            <el-table-column label="更新时间" width="155"
                sortable="custom"
                prop="updatetime">
            </el-table-column>
            <el-table-column label="操作" width="150">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            :page-size="10"
            :pager-count="7"
            :current-page="currentPage"
            @current-change="handleCurrentChange"
            layout="prev, pager, next"
            :total="totalnum">
        </el-pagination>

        <el-dialog append-to-body :close-on-click-modal="false" :visible.sync="editdialog" width="400px">
            <el-form inline size="small" :model="rowrecord" label-width="100px">
                <el-form-item label="原始名称" prop="srcname">
                    <span v-text="rowrecord.srcname" style="width: 370px;" />
                </el-form-item>
                <el-form-item label="原始地址" prop="srcpath">
                    <span v-text="rowrecord.srcpath" style="width: 370px;" />
                </el-form-item>
                <el-form-item label="状态" prop="status">
                    <el-radio-group v-model="rowrecord.status">
                        <el-radio :label="0">未刮削</el-radio>
                        <el-radio :label="1">完成</el-radio>
                        <el-radio :label="2">失败</el-radio>
                        <el-radio :label="3">忽略</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="刮削用名称" prop="scrapingname">
                    <el-input v-model="rowrecord.scrapingname" style="width: 300px;" />
                </el-form-item>
                <el-form-item label="强制中文" prop="cnsubtag">
                    <el-radio-group v-model="rowrecord.cnsubtag">
                        <el-radio :label="true">开启</el-radio>
                        <el-radio :label="false">关闭</el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="text" @click="dialogexit()">取消</el-button>
                <el-button type="primary" @click="dialogupdate()" >修改</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script lang="ts">
import axios from 'axios'
import {ScrapingRecordDto} from '../types/ika-record'

export default {
    name: 'scraping',
    data() {
        return {
            running: false,
            tips: '当前无任务',
            currentPage: 1,
            totalnum: 10,
            pagesize: 10,
            blur: '',
            sortprop: '',
            sortorder: '',
            editdialog: false,
            rowrecord: [],
            scrapingrecords: []
        }
    },
    created(){
        console.log('init data')
        this.refresh()
    },
    mounted() {
        this.timer = setInterval(this.refresh, 1500);
    },
    beforeDestroy() {
        clearInterval(this.timer);
    },
    methods: {
        start() {
            axios.post('/api/scraping')
                .then(response => {
                    console.log(response)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        stop() {
            axios.get('/api/stopall')
                .then(response => {
                    console.log(response)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        changesort(sortProps: any){
            this.sortprop = sortProps.prop
            this.sortorder = sortProps.order
        },
        refresh() {
            let pageparam: string = 'page=' + this.currentPage + '&size=' + this.pagesize
            let sortparam = '&sortprop=' + this.sortprop + '&sortorder=' + this.sortorder
            let blurparam = '&blur=' + this.blur 
            let geturl = '/api/scrapingrecord?' + pageparam + sortparam + blurparam
            axios.get(geturl)
                .then(response => {
                    this.scrapingrecords = response.data.data
                    this.currentPage = response.data.page
                    this.totalnum = response.data.total

                    this.running = response.data.running
                    if (this.running) {
                        let tasktotal: number = response.data.tasktotal
                        let taskfinished: number = response.data.taskfinished
                        let percentage = taskfinished / tasktotal * 100
                        this.tips = "刮削进度: " + percentage.toFixed(2) + '%' + " [" + taskfinished + "/" + tasktotal + "]"
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        handleEdit(index: number, row: ScrapingRecordDto) {
            this.rowrecord = row;
            this.editdialog = true
        },
        dialogexit() {
            this.editdialog = false
        },
        dialogupdate() {
            this.editdialog = false
            axios.put('/api/scrapingrecord', this.rowrecord)
                .then(response => {
                    console.log(response)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        handleDelete(index: number, row: ScrapingRecordDto) {
            axios.delete('/api/scrapingrecord/'+ row.id)
                .then(() => {
                    this.$message({
                        showClose: true,
                        duration: 2000,
                        message: '删除成功',
                        type: 'success'
                    })
                })
                .catch(function (error) {
                    this.$message({
                        showClose: true,
                        duration: 2000,
                        message: '删除失败:'+ error,
                        type: 'error'
                    })

                });
        },
        handleCurrentChange(num: number){
            this.currentPage = num
        }
    }
}
</script>

<style scoped>

.body-wrap{
    margin: 15px 5px 5px 5px;
}
.el-col {
    border-radius: 4px;
}

.alter-tip {
    margin: 5px;
}

</style>

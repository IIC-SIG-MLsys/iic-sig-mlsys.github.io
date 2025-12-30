---
layout: page
title: "科研项目"
permalink: /projects/
---

<div class="projects-wrapper" style="margin-top: 30px;">

  <div class="project-item" style="display: flex; gap: 30px; align-items: center; margin-bottom: 50px; border-bottom: 1px solid #eaecef; padding-bottom: 40px;">
    
    <div class="project-img" style="flex: 0 0 300px; max-width: 300px;">
      <a href="https://github.com/IIC-SIG-MLsys/HMC" target="_blank" style="display: block; cursor: pointer;">
        <img src="/assets/img/hmc_teaser.png" alt="HMC 架构图" 
             style="width: 100%; border-radius: 6px; border: 1px solid #e1e4e8; padding: 4px; box-shadow: 0 3px 8px rgba(0,0,0,0.06); transition: transform 0.2s;">
      </a>
    </div>
    
    <div class="project-content" style="flex: 1;">
      <h3 style="margin-top: 0; margin-bottom: 15px; font-size: 1.35rem; line-height: 1.4;">
        <a href="https://github.com/IIC-SIG-MLsys/HMC" target="_blank" 
           style="color: #0366d6 !important; text-decoration: none; border-bottom: 2px solid #0366d6; padding-bottom: 1px; font-weight: 700;">
          面向异构算力的 GPU 高效通信库 (HMC)
        </a>
      </h3>
      
      <p style="font-size: 1rem; color: #333; line-height: 1.8; margin-bottom: 0; text-align: justify; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
        HMC (Heterogeneous Memory Communication) 是一个面向异构算力集群的高性能通信框架。针对当前 AI 芯片生态碎片化的挑战，HMC 提供了一套<strong>统一的内存抽象与通信原语</strong>，屏蔽了底层硬件（NVIDIA, AMD, 海光, 寒武纪, 摩尔线程等）的差异。
        <br><br>
        通过统一设计的注册 I/O 缓冲区 (ConnBuffer) 与传输层接口，HMC 实现了跨代际、跨厂商设备的低延迟数据搬运与拓扑感知，为大规模混合异构训练系统提供了高效、兼容的底层互联支持。
      </p>
    </div>
  </div>


  <div class="project-item" style="display: flex; gap: 30px; align-items: center; margin-bottom: 50px; border-bottom: 1px solid #eaecef; padding-bottom: 40px;">
    
    <div class="project-img" style="flex: 0 0 300px; max-width: 300px;">
      <a href="#" style="display: block; cursor: default;">
        <img src="/assets/img/supernode_teaser.jpg" alt="超节点系统总体架构" 
             style="width: 100%; border-radius: 6px; border: 1px solid #e1e4e8; padding: 4px; box-shadow: 0 3px 8px rgba(0,0,0,0.06); transition: transform 0.2s;">
      </a>
    </div>
    
    <div class="project-content" style="flex: 1;">
      <h3 style="margin-top: 0; margin-bottom: 15px; font-size: 1.35rem; line-height: 1.4;">
        <a href="#" style="color: #0366d6 !important; text-decoration: none; border-bottom: 2px solid #0366d6; padding-bottom: 1px; font-weight: 700;">
          复杂异构人工智能超节点系统建模仿真关键技术研究
        </a>
      </h3>
      
      <p style="font-size: 1rem; color: #333; line-height: 1.8; margin-bottom: 0; text-align: justify; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
        面向万亿参数大模型时代从“训练集中”向“推理主导”的算力需求转型，本项目旨在解决国产异构芯片集成带来的算力扩展瓶颈。
        <br><br>
        项目构建了“理论-协同-建模-平台-原型”的闭环研究体系，重点突破<strong>异构算力资源的统一建模理论</strong>，消解超节点内部数据传输与任务调度的协同计算瓶颈，并研发<strong>多尺度高保真仿真平台</strong>。预期将实现不低于 64 卡的国产混合异构超节点原型系统，为国产智算基础设施的性能优化提供关键理论与方法支撑。
      </p>
      
    </div>
  </div>

</div>

<style>
/* 图片悬停效果：微微浮起 */
.project-img img:hover { transform: translateY(-3px); box-shadow: 0 8px 20px rgba(0,0,0,0.12) !important; }

/* 标题悬停效果：颜色变深 */
.project-content h3 a:hover { color: #004494 !important; border-bottom-color: #004494 !important; }

/* 移动端适配：屏幕窄时变竖排，图片占满宽度 */
@media (max-width: 768px) {
  .project-item { flex-direction: column; align-items: flex-start !important; }
  .project-img { max-width: 100% !important; flex: 0 0 auto !important; margin-bottom: 20px; width: 100%; }
}
</style>

import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';

import crmDataIcon from './../assets/icons/crm-data-enrichment.png';
import crmSyncIcon from './../assets/icons/crm-sync.png';
import bulkExportIcon from './../assets/icons/bulk-export.png';
import aiProductivityIcon from './../assets/icons/ai-productivity.png';
import enrichedProfileImg from './../assets/solutions/enriched-profile.png';
import searchFiltersImg from './../assets/solutions/search-filters.png';
import waterfallEnrichmentImg from './../assets/solutions/waterfall-enrichment.png';

const Solutions = () => {
  const [activeTab, setActiveTab] = useState('crm-data-enrichment');

  const tabItems = [
    { id: 'crm-data-enrichment', icon: crmDataIcon, label: 'CRM Data Enrichment' },
    { id: 'crm-data-sync', icon: crmSyncIcon, label: 'CRM Data Sync' },
    { id: 'bulk-export-enrichment', icon: bulkExportIcon, label: 'Bulk Export & Enrichment' },
    { id: 'ai-productivity', icon: aiProductivityIcon, label: 'AI Productivity' },
  ];

  return (
 
    <section className="solutions">
      <div className="solutions__container">
        <div className="solutions__header">
          
          <div className="solutions__header-content">
            <h2 className="solutions__heading">Complete LinkedIn Sales Solutions</h2>
            <p className="solutions__subheading">Everything you need for professional LinkedIn prospecting</p>
          </div>
        </div>

        <nav className="solutions__tabs">
          {tabItems.map((item) => (
            <button
              key={item.id}
              className={`tab-item ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              <img src={item.icon} alt="" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <p className="solutions__intro-text">
          It’s hard to find the accurate contact data for every prospects by <span className="highlight-badge">Incomplete Data</span>
        </p>

        {activeTab === 'crm-data-enrichment' && (
          <div className="solutions__content-grid">
            <div className="content-panel content-panel--left">
              <h3 className="panel__heading">Here is how LeadCRM tackles that situation.</h3>
              <a href="#" className="panel__link">
                Try LeadCRM Data Enrichment <FaChevronRight />
              </a>
              <div className="panel__image-group">
                <img src={enrichedProfileImg} alt="Enriched Profile Data" className="panel__img" />
                <img src={searchFiltersImg} alt="Search Filters" className="panel__img" />
              </div>
            </div>

            <div className="content-panel content-panel--right">
              <h3 className="panel__heading">
                If it does not works for you ! try our <span className="highlight-text">Advanced Waterfall Enrichment</span>
              </h3>
              <a href="#" className="panel__link">
                Advanced Waterfall Enrichment <FaChevronRight />
              </a>
              <div className="panel__image-single">
                <img src={waterfallEnrichmentImg} alt="Waterfall Enrichment Process" className="panel__img" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Solutions;
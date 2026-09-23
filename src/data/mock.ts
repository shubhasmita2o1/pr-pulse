export type Client = { id:string; name:string; company:string; status:'Active'|'Prospect'|'Churned'; tier:'Growth'|'Premier'|'Essential'; industry:string; owner:string; retainer:string; initials:string }
export type Meeting = { id:string; title:string; client:string; date:string; time:string; duration:string; type:string; location:string; transcript:'Ready'|'Pending'|'None'; source:'Cal.com'|'Google Calendar'|'Manual' }
export type Campaign = { id:string; title:string; client:string; status:'Live'|'Draft'|'Complete'|'Paused'; range:string; tags:string[]; impressions:string; coverage:number }
export const clients: Client[] = [
{id:'novatech',name:'NovaTech',company:'NovaTech Systems',status:'Active',tier:'Premier',industry:'Enterprise AI',owner:'Maya Chen',retainer:'$18,500',initials:'NT'},
{id:'greenleaf',name:'GreenLeaf',company:'GreenLeaf Foods',status:'Active',tier:'Growth',industry:'Consumer',owner:'Jon Bell',retainer:'$12,000',initials:'GL'},
{id:'finova',name:'Finova',company:'Finova Capital',status:'Active',tier:'Premier',industry:'Fintech',owner:'Maya Chen',retainer:'$21,000',initials:'FV'},
{id:'harbor',name:'Harbor Health',company:'Harbor Health Group',status:'Prospect',tier:'Growth',industry:'Healthtech',owner:'Sara Kim',retainer:'$9,500',initials:'HH'},
{id:'wildkind',name:'Wildkind',company:'Wildkind Outdoors',status:'Active',tier:'Essential',industry:'Lifestyle',owner:'Jon Bell',retainer:'$7,500',initials:'WK'},
{id:'arcadia',name:'Arcadia Labs',company:'Arcadia Labs Inc.',status:'Churned',tier:'Growth',industry:'Climate tech',owner:'Sara Kim',retainer:'$11,000',initials:'AL'},
]
export const meetings: Meeting[] = [
{id:'m1',title:'Q4 narrative workshop',client:'NovaTech',date:'Sep 24, 2026',time:'10:00 AM',duration:'45 min',type:'Strategy',location:'Google Meet',transcript:'Pending',source:'Cal.com'},
{id:'m2',title:'Launch readiness sync',client:'GreenLeaf',date:'Sep 24, 2026',time:'2:30 PM',duration:'30 min',type:'Campaign',location:'Zoom',transcript:'Ready',source:'Google Calendar'},
{id:'m3',title:'Weekly media stand-up',client:'Finova',date:'Sep 25, 2026',time:'9:30 AM',duration:'30 min',type:'Status',location:'Google Meet',transcript:'Ready',source:'Cal.com'},
{id:'m4',title:'New business discovery',client:'Harbor Health',date:'Sep 26, 2026',time:'11:00 AM',duration:'60 min',type:'Discovery',location:'Office · Room 3',transcript:'None',source:'Manual'},
{id:'m5',title:'Founder profile prep',client:'Wildkind',date:'Sep 28, 2026',time:'3:00 PM',duration:'45 min',type:'Media prep',location:'Zoom',transcript:'Pending',source:'Google Calendar'},
]
export const campaigns: Campaign[] = [
{id:'c1',title:'NovaOS 4.0 Launch',client:'NovaTech',status:'Live',range:'Sep 8 – Oct 4',tags:['Product launch','Technology'],impressions:'2.84M',coverage:18},
{id:'c2',title:'Regenerative Packaging Report',client:'GreenLeaf',status:'Live',range:'Sep 14 – Oct 18',tags:['Thought leadership','ESG'],impressions:'1.26M',coverage:9},
{id:'c3',title:'SMB Credit Pulse',client:'Finova',status:'Complete',range:'Aug 2 – Sep 2',tags:['Research','Fintech'],impressions:'4.18M',coverage:27},
{id:'c4',title:'Trail Less Traveled',client:'Wildkind',status:'Draft',range:'Oct 5 – Nov 12',tags:['Brand','Lifestyle'],impressions:'—',coverage:0},
]
export const transcripts = [
{id:'t1',title:'Launch readiness sync',client:'GreenLeaf',date:'Sep 22, 2026',source:'Read AI',meeting:'Launch readiness sync',duration:'31:42',speakers:3},
{id:'t2',title:'Q4 media narrative',client:'NovaTech',date:'Sep 18, 2026',source:'Read AI',meeting:'Q4 narrative workshop',duration:'47:18',speakers:4},
{id:'t3',title:'Founder profile prep',client:'Wildkind',date:'Sep 16, 2026',source:'Manual',meeting:'Not linked',duration:'26:05',speakers:2},
]
export const channelMetrics = [
{channel:'Email — Tech editors',pitched:186,impressions:'1.24M',opens:122,clicks:48,replies:17,coverage:8,response:'9.1%'},
{channel:'Email — Business desks',pitched:94,impressions:'980K',opens:61,clicks:22,replies:9,coverage:5,response:'9.6%'},
{channel:'LinkedIn outreach',pitched:63,impressions:'420K',opens:41,clicks:19,replies:7,coverage:3,response:'11.1%'},
]

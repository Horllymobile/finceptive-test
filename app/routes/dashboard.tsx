import { styled } from "styled-components";
import { DashboardHeader, DropDownIcon } from "./components/DashboardHeader";
import {
  FilterButton,
  FilterIcon,
  NavText,
  PAGINATION,
  PAGINATION_CONTAINER,
  ParagraphText,
  SearchInput,
  TitleLarge,
  Wraper,
  StyledIcon,
  AddIcon,
} from "./components/styles-components";
import { StatsCard } from "./components/StatsCard";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  MainDashboardWrapper,
  SideNav,
  ProfileWrapper,
  AvatarWrapper,
  AvatarText,
  ProfileInfoWrapper,
  H3,
  H4,
  NavItems,
  NavItem,
  MainPage,
  ContainerWrapper,
  AddButton,
  StatsCardWrapper,
  TableWrapper,
  TABLE,
  TableHead,
  TR,
  TH,
  TableBody,
  TD,
  SUCCESS_BADGE,
  FAILED_BADGE,
  PENDING_BADGE,
  ActionWrapper,
  EDIT_BUTTON,
  DELETE_BUTTON,
  PencilIcon,
  TrashIcon,
  POST_WRAPPER,
  POST_ITEM,
  TITLE_TEXT,
  CONTAINER,
  FILTER_SECTION,
  FILTER_CONTAINER,
} from "./components/DashboardComponent";
import {
  ArrowRightLeft,
  ChartPie,
  ChevronLeft,
  ChevronRight,
  FileLock2,
  FileText,
  PiggyBank,
  Rocket,
  Settings,
  Smartphone,
  Users,
  Wallet,
} from "lucide-react";

const navs = [
  {
    name: "Overview",
    active: false,
    icon: (
      <StyledIcon>
        <Rocket size={20} />
      </StyledIcon>
    ),
  },
  {
    name: "Users",
    active: false,
    icon: (
      <StyledIcon>
        <Users size={20} />
      </StyledIcon>
    ),
  },
  {
    name: "Posts",
    active: true,
    icon: (
      <StyledIcon>
        <FileText size={20} />
      </StyledIcon>
    ),
  },
  {
    name: "Transfters",
    active: false,
    icon: (
      <StyledIcon>
        <ArrowRightLeft size={20} />
      </StyledIcon>
    ),
  },
  {
    name: "Deposits",
    active: false,
    icon: (
      <StyledIcon>
        <Wallet size={20} />
      </StyledIcon>
    ),
  },
  {
    name: "Savings",
    active: false,
    icon: (
      <StyledIcon>
        <PiggyBank size={20} />
      </StyledIcon>
    ),
  },
  {
    name: "Bill Payments",
    active: false,
    icon: (
      <StyledIcon>
        <Smartphone size={20} />
      </StyledIcon>
    ),
  },
  {
    name: "Reports",
    active: false,
    icon: (
      <StyledIcon>
        <ChartPie size={20} />
      </StyledIcon>
    ),
  },
  {
    name: "Compliance",
    active: false,
    icon: (
      <StyledIcon>
        <FileLock2 size={20} />
      </StyledIcon>
    ),
  },
  {
    name: "Settings",
    active: false,
    icon: (
      <StyledIcon>
        <Settings size={20} />
      </StyledIcon>
    ),
  },
];

const TEX_CONTAINER = styled(CONTAINER)`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  justify-content: start;
`;

const MOBILE_CONTAINER = styled(CONTAINER)`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  justify-content: end;
`;

const SPAN = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

type TPost = {
  id: string;
  body: string;
  title: string;
  user: string;
  status: string;
};

export default function Dashboard() {
  const [posts, setPosts] = useState<TPost[]>([]);
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await axios.get(
      "https://my-json-server.typicode.com/Horllymobile/finceptive-db/posts",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      setPosts(response.data);
      console.log(response);
    }
  };

  return (
    <Wraper>
      <DashboardHeader></DashboardHeader>
      <MainDashboardWrapper>
        <SideNav>
          <ProfileWrapper>
            <AvatarWrapper>
              <AvatarText>TU</AvatarText>
            </AvatarWrapper>
            <ProfileInfoWrapper>
              <H3>Test User</H3>
              <H4>test@user.com</H4>
            </ProfileInfoWrapper>
          </ProfileWrapper>

          <NavItems>
            {navs.map((nav) => (
              <NavItem
                key={nav.name}
                className={`${nav.active ? "active" : ""}`}
              >
                {nav.icon}
                <NavText>{nav.name}</NavText>
              </NavItem>
            ))}
          </NavItems>
        </SideNav>
        <MainPage>
          <ContainerWrapper>
            <div>
              <TitleLarge>Post Metrics</TitleLarge>
              <ParagraphText>View all your post metrics here </ParagraphText>
            </div>

            <AddButton>
              <AddIcon></AddIcon>
            </AddButton>
          </ContainerWrapper>

          <StatsCardWrapper>
            <StatsCard
              title="Total Post"
              amount="139,000"
              percentage="+1 today"
              color="#7000F6"
            ></StatsCard>

            <StatsCard
              title="Total Successful Post"
              amount="89,120"
              percentage=""
              color="#008000"
            ></StatsCard>

            <StatsCard
              title="Total Failed Post"
              amount="12,100"
              percentage="+5% today"
              color="#FF0000"
            ></StatsCard>
          </StatsCardWrapper>

          <FILTER_SECTION>
            <SearchInput placeholder="Search Post"></SearchInput>

            <FILTER_CONTAINER>
              <FilterButton>
                <FilterIcon></FilterIcon>
                <SPAN>Filters</SPAN>
                <DropDownIcon />
              </FilterButton>

              <PAGINATION>
                <ChevronLeft />
                <PAGINATION_CONTAINER>
                  <SPAN>1-10</SPAN>
                  <SPAN>of</SPAN>
                  <SPAN style={{ color: "gray" }}>240</SPAN>
                </PAGINATION_CONTAINER>
                <ChevronRight />
              </PAGINATION>
            </FILTER_CONTAINER>
          </FILTER_SECTION>

          <TableWrapper>
            <TABLE>
              <TableHead>
                <TR>
                  <TH>Body Content</TH>
                  <TH>Title</TH>
                  <TH>Post ID</TH>
                  <TH>User</TH>
                  <TH>Status</TH>
                  <TH>Action</TH>
                </TR>
              </TableHead>
              <TableBody>
                {posts.map((post) => (
                  <TR key={post.id}>
                    <TD className="body-colum">
                      {post.body.slice(0, 20) + "..."}
                    </TD>
                    <TD className="title-colum">{post.title}</TD>
                    <TD>{post.id}</TD>
                    <TD>{post.user}</TD>
                    <TD className="status-column">
                      {post.status === "Success" && (
                        <SUCCESS_BADGE>{post.status}</SUCCESS_BADGE>
                      )}
                      {post.status === "Failed" && (
                        <FAILED_BADGE>{post.status}</FAILED_BADGE>
                      )}

                      {post.status === "Pending" && (
                        <PENDING_BADGE>{post.status}</PENDING_BADGE>
                      )}
                    </TD>
                    <TD>
                      <ActionWrapper>
                        <EDIT_BUTTON>
                          <PencilIcon />
                        </EDIT_BUTTON>
                        <DELETE_BUTTON>
                          <TrashIcon />
                        </DELETE_BUTTON>
                      </ActionWrapper>
                    </TD>
                  </TR>
                ))}
              </TableBody>
            </TABLE>
          </TableWrapper>

          <POST_WRAPPER>
            {posts.map((post) => (
              <POST_ITEM key={post.id}>
                <TEX_CONTAINER>
                  <TITLE_TEXT>{post.title}</TITLE_TEXT>
                  <ParagraphText>
                    {post.body.slice(0, 30) + "..."}
                  </ParagraphText>
                </TEX_CONTAINER>

                <MOBILE_CONTAINER>
                  {post.status === "Success" && (
                    <SUCCESS_BADGE>{post.status}</SUCCESS_BADGE>
                  )}
                  {post.status === "Failed" && (
                    <FAILED_BADGE>{post.status}</FAILED_BADGE>
                  )}

                  {post.status === "Pending" && (
                    <PENDING_BADGE>{post.status}</PENDING_BADGE>
                  )}
                  <ParagraphText>Posted by: {post.user}</ParagraphText>
                </MOBILE_CONTAINER>
              </POST_ITEM>
            ))}
          </POST_WRAPPER>
        </MainPage>
      </MainDashboardWrapper>
    </Wraper>
  );
}
